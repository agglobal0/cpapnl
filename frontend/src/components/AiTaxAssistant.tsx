import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, ArrowRight, Phone, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { trackEvent } from '../services/analytics';
import { api } from '../services/api';

interface AiTaxAssistantProps {
  onBookConsultation: (context?: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  cta?: {
    label: string;
    action: () => void;
  };
}

const KNOWLEDGE_BASE: Array<{
  keywords: string[];
  response: string;
  ctaText?: string;
  context?: string;
}> = [
  {
    keywords: ['ccpc', 'small business tax rate', 'ontario tax rate', 'corporate tax rate', 'small business deduction'],
    response: 'In Ontario, eligible Canadian-Controlled Private Corporations (CCPCs) benefit from the Small Business Deduction. The combined federal (9%) and Ontario (3.2%) rate is 12.2% on active business income up to the $500,000 threshold. Income above $500,000 is taxed at the general corporate rate of 26.5%.\n\nWe frequently help clients structure multiple entities or manage passive investment rules so they never lose the 12.2% rate.',
    ctaText: 'Review My Corporate Tax Rate',
    context: 'Corporate Tax Rate Review',
  },
  {
    keywords: ['deadline', 'due date', 'when is t2', 't2 deadline', 'tax deadline', 'when do i file'],
    response: 'Key Canadian tax deadlines to remember:\n• Corporate T2 Return: Due 6 months after your fiscal year-end (e.g., June 30 for Dec 31 year-end).\n• Corporate Tax Payment: Due 2 months after year-end (or 3 months for eligible CCPCs).\n• Personal T1 Return: April 30 (or June 15 for self-employed, balance still due April 30).\n• T4/T5 Slips: Due by the last day of February.\n• GST/HST: Due monthly, quarterly, or annually based on revenue.',
    ctaText: 'View 2025 CRA Calendar',
    context: 'Tax Deadlines',
  },
  {
    keywords: ['hst', 'gst', 'sales tax', 'registration', 'threshold', '30000', '30,000'],
    response: 'In Canada, once your gross worldwide taxable sales exceed $30,000 over any single calendar quarter or four consecutive quarters, you must register for GST/HST.\n\nIn Ontario, the combined HST rate is 13%. As a registrant, you also recover all HST paid on business expenses through Input Tax Credits (ITCs) — we regularly recover thousands in missed ITCs for new clients.',
    ctaText: 'Review My HST Filing',
    context: 'HST Consultation',
  },
  {
    keywords: ['salary', 'dividend', 'salary vs dividend', 'bonus', 'how should i pay myself'],
    response: 'The salary vs. dividend decision depends on several variables:\n• Salary: Creates RRSP contribution room, requires CPP contributions (both employer & employee shares), and provides deductible corporate expense.\n• Dividends: No CPP deductions, lower immediate payroll administration, taxed at preferential dividend tax credit rates personally, but does not generate RRSP room.\n\nA custom blend tailored to your lifestyle and retirement goals usually yields the lowest combined tax.',
    ctaText: 'Optimize My Owner Compensation',
    context: 'Salary vs Dividend Strategy',
  },
  {
    keywords: ['holdco', 'holding company', 'holding corp', 'creditor', 'asset protection'],
    response: 'A holding company (Holdco) offers three primary advantages in Canada:\n1. Creditor Protection: Safely move surplus cash and investments away from the operating company (Opco) via tax-free intercorporate dividends.\n2. Lifetime Capital Gains Exemption (LCGE): Purify the Opco so it remains a Qualified Small Business Corporation (QSBC) for up to $1.25M tax-free on exit.\n3. Reinvestment: Reinvest profits into real estate or market portfolios with minimal immediate personal tax drag.',
    ctaText: 'Explore Holdco Structuring',
    context: 'Holdco Structuring',
  },
  {
    keywords: ['cra', 'audit', 'review', 'dispute', 'notice of assessment', 'penalties'],
    response: 'If you receive a CRA review or audit notice, do not panic and do not respond unprepared. The CRA requests specific supporting documentation and strict timelines.\n\nPuri & Loggia LLP provides direct CRA audit defense and representation. We act as your authorized representative (Level 2/3), communicate directly with CRA auditors, and protect your rights.',
    ctaText: 'Get CRA Audit Defense',
    context: 'CRA Audit Assistance',
  },
  {
    keywords: ['price', 'pricing', 'cost', 'how much', 'fee', 'retainer'],
    response: 'Our monthly accounting packages are fixed and predictable with zero surprises:\n• Essentials: From $499/mo (Cloud bookkeeping, reconciliations, year-end statements, T2 corporate return, GST/HST).\n• Growth: From $899/mo (+ proactive tax planning, salary/dividend optimization, payroll, CRA support).\n• Advisory CFO: From $1,799/mo (+ fractional CFO, 13-week cash flow, board reporting, Holdco advisory).\n\nEvery engagement starts with a complimentary 30-minute discovery call.',
    ctaText: 'Book a Free Discovery Call',
    context: 'Pricing Inquiry',
  },
  {
    keywords: ['xero', 'quickbooks', 'qbo', 'software', 'cloud', 'bookkeeping'],
    response: 'Puri & Loggia LLP is a certified Xero Silver Partner and QuickBooks Online Advanced Certified firm. We help you transition away from desktop software or spreadsheets into automated bank feeds, receipt capture (Dext/Hubdoc), and real-time monthly reporting on the 15th of each month.',
    ctaText: 'Schedule Software Setup',
    context: 'Cloud Accounting Setup',
  },
];

export const AiTaxAssistant: React.FC<AiTaxAssistantProps> = ({ onBookConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! I'm the Puri & Loggia AI Tax Copilot, powered by our partners' 25+ years of Canadian CPA expertise.\n\nAsk me anything about Canadian corporate tax (T2), Ontario rates, CRA deadlines, holding companies, or bookkeeping.",
      time: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (queryText?: string) => {
    const query = (queryText || inputText).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: query,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputText('');
    setIsTyping(true);
    trackEvent('ai_copilot_query', { query });

    setTimeout(() => {
      const lower = query.toLowerCase();
      let matched = KNOWLEDGE_BASE.find((k) =>
        k.keywords.some((kw) => lower.includes(kw))
      );

      let botText = '';
      let cta: ChatMessage['cta'] | undefined;

      if (matched) {
        botText = matched.response;
        if (matched.ctaText) {
          cta = {
            label: matched.ctaText,
            action: () => onBookConsultation(matched?.context || 'AI Copilot'),
          };
        }
      } else {
        botText =
          "That's an important financial consideration. Canadian tax rules have nuanced exceptions depending on your corporate structure, revenue, and province.\n\nWould you like to speak directly with Mark Puri, CPA or Helen Loggia, CPA for a complimentary 30-minute review of your exact scenario?";
        cta = {
          label: 'Book Free 30-Min Call with a Partner',
          action: () => onBookConsultation('AI Copilot Inquiry'),
        };
      }

      const botMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'bot',
        text: botText,
        time: 'Just now',
        cta,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 650);
  };

  const handlePreset = (prompt: string) => {
    handleSend(prompt);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9998 }}>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            trackEvent('ai_copilot_opened');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            backgroundColor: '#0F294A',
            color: '#FFFFFF',
            border: '2px solid #FCAC14',
            borderRadius: '9999px',
            padding: '0.85rem 1.4rem',
            boxShadow: '0 8px 24px rgba(15, 41, 74, 0.4)',
            cursor: 'pointer',
            fontWeight: 800,
            fontSize: '14px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(15, 41, 74, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 41, 74, 0.4)';
          }}
          aria-label="Open AI Tax Copilot"
        >
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              backgroundColor: '#FCAC14',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0F294A',
            }}
          >
            <Sparkles size={14} />
          </div>
          <span>Ask Mark &amp; Helen AI</span>
          <span
            style={{
              backgroundColor: '#22C55E',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
        </button>
      )}

      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div
          style={{
            width: 'clamp(320px, 92vw, 420px)',
            height: 'clamp(500px, 75vh, 620px)',
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0 20px 48px rgba(15, 23, 42, 0.35)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: '#0F294A',
              color: '#FFFFFF',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid #FCAC14',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(252, 172, 20, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FCAC14',
                }}
              >
                <Bot size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '14.5px', lineHeight: 1.2 }}>
                  PnL Tax Copilot
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)' }}>
                  Backed by 25+ Years CPA Experience
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.75)',
                cursor: 'pointer',
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div
            style={{
              backgroundColor: '#F8FAFC',
              borderBottom: '1px solid var(--border-light)',
              padding: '0.6rem 0.85rem',
              display: 'flex',
              gap: '0.45rem',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            {[
              { label: '📊 CCPC Tax Rate', q: 'What is the Ontario small business tax rate?' },
              { label: '📅 Deadlines', q: 'When is the T2 corporate tax deadline?' },
              { label: '💼 Salary vs Dividend', q: 'Should I take salary or dividends?' },
              { label: '🏢 Holdco Setup', q: 'What are the benefits of a holding company in Ontario?' },
              { label: '💲 Pricing', q: 'How much do your CPA packages cost?' },
            ].map((p, i) => (
              <button
                key={i}
                onClick={() => handlePreset(p.q)}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '16px',
                  padding: '0.3rem 0.75rem',
                  fontSize: '11.5px',
                  fontWeight: 600,
                  color: 'var(--navy-900)',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Message Stream */}
          <div
            style={{
              flex: 1,
              padding: '1rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              backgroundColor: '#F8FAFC',
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: m.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '86%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '8px',
                    backgroundColor: m.sender === 'user' ? '#0F294A' : '#FFFFFF',
                    color: m.sender === 'user' ? '#FFFFFF' : 'var(--navy-900)',
                    border: m.sender === 'user' ? 'none' : '1px solid var(--border-light)',
                    fontSize: '13.5px',
                    lineHeight: 1.55,
                    whiteSpace: 'pre-line',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  {m.text}

                  {m.cta && (
                    <div style={{ marginTop: '0.85rem', paddingTop: '0.65rem', borderTop: '1px solid var(--border-light)' }}>
                      <button
                        onClick={m.cta.action}
                        style={{
                          backgroundColor: '#FCAC14',
                          color: '#0F294A',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '0.45rem 0.85rem',
                          fontWeight: 800,
                          fontSize: '12px',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        <span>{m.cta.label}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '12px', paddingLeft: '0.5rem' }}>
                <Sparkles size={13} color="#D97706" />
                <span>Puri &amp; Loggia AI is analyzing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: '0.75rem 0.85rem',
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
            }}
          >
            <input
              type="text"
              placeholder="Ask a tax or accounting question..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{
                flex: 1,
                border: '1px solid #CBD5E1',
                borderRadius: '6px',
                padding: '0.65rem 0.85rem',
                fontSize: '13px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              style={{
                backgroundColor: '#FCAC14',
                color: '#0F294A',
                border: 'none',
                borderRadius: '6px',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputText.trim() ? 'pointer' : 'default',
                opacity: inputText.trim() ? 1 : 0.6,
              }}
              aria-label="Send Message"
            >
              <Send size={16} />
            </button>
          </form>

          {/* Footer disclaimer */}
          <div
            style={{
              backgroundColor: '#F1F5F9',
              padding: '0.35rem 0.75rem',
              fontSize: '10.5px',
              color: 'var(--text-muted)',
              textAlign: 'center',
              borderTop: '1px solid #E2E8F0',
            }}
          >
            General Canadian tax guidance · Always verify with a licensed CPA
          </div>
        </div>
      )}
    </div>
  );
};
