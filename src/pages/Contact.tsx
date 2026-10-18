import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Loader2, ArrowUpRight, MapPin } from 'lucide-react';
import { PageIntro } from '../components/common/PageIntro';
import { Button } from '../components/ui/Button';
import { OpeningHours } from '../components/common/OpeningHours';
import { ConceptMap } from '../components/common/LocationSection';
import { ASSETS } from '../data/restaurant';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  message: '',
};

function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getTimeSlots(dateStr?: string) {
  const day = dateStr ? new Date(`${dateStr}T12:00:00`).getDay() : 1;
  const startHour = day === 0 ? 16 : 17;
  const endHour = day === 0 ? 21 : day === 5 || day === 6 ? 23 : 22;
  const slots: { value: string; label: string }[] = [];

  for (let h = startHour; h <= endHour; h++) {
    for (const m of ['00', '30']) {
      if (h !== endHour || m !== '30') {
        const displayHour = h > 12 ? h - 12 : h;
        slots.push({
          value: `${h}:${m}`,
          label: `${displayHour}:${m} PM`,
        });
      }
    }
  }
  return slots;
}

export function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    setMinDate(getTodayString());
  }, []);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'date' ? { time: '' } : {}),
    }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!form.email.trim() && !form.phone.trim()) {
      nextErrors.email = 'Please enter an email address or phone number.';
      nextErrors.phone = 'Please enter a phone number or email address.';
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (form.phone && !/^[+\d\s().-]{7,25}$/.test(form.phone)) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (!form.date || form.date < getTodayString()) {
      nextErrors.date = 'Please select today or a future date.';
    }

    const validSlots = getTimeSlots(form.date);
    if (!validSlots.some((s) => s.value === form.time)) {
      nextErrors.time = 'Please choose an available time.';
    }

    if (form.date === getTodayString() && form.time) {
      const selectedDateTime = new Date(`${form.date}T${form.time}`);
      if (selectedDateTime <= new Date()) {
        nextErrors.time = 'Please choose a future time.';
      }
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`reservation-${firstField}`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      await new Promise((resolve) => setTimeout(resolve, 650));
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch {
      setStatus('error');
    }
  };

  const renderField = (
    field: keyof FormData,
    label: string,
    type: string,
    className = ''
  ) => (
    <div className={`form-field ${className}`}>
      <label htmlFor={`reservation-${field}`}>{label}</label>
      <input
        id={`reservation-${field}`}
        name={field}
        type={type}
        value={form[field]}
        onChange={(e) => handleChange(field, e.target.value)}
        min={field === 'date' ? minDate : undefined}
        autoComplete={
          field === 'name' ? 'name' : field === 'email' ? 'email' : field === 'phone' ? 'tel' : undefined
        }
        aria-invalid={!!errors[field]}
        aria-describedby={errors[field] ? `error-${field}` : undefined}
        disabled={status === 'submitting'}
      />
      {errors[field] && (
        <span id={`error-${field}`} className="field-error">
          {errors[field]}
        </span>
      )}
    </div>
  );

  return (
    <>
      <PageIntro
        eyebrow="There’s a place for you here"
        title="Come as you are. Stay for the experience."
      >
        A quiet dinner, a special occasion, or just because. Make an evening of it.
      </PageIntro>

      <section className="section pt-0">
        <div className="site-container reservation-layout">
          <div className="reservation-form">
            {status === 'success' ? (
              <div className="success-state" role="status">
                <CheckCircle2 size={38} />
                <span className="eyebrow">Demonstration complete</span>
                <h2>Table request received.</h2>
                <p>
                  Thank you for exploring Luna. This was a demonstration only; no reservation was made and no personal details were stored or sent.
                </p>
                <Button asChild size="lg">
                  <Link to="/">
                    Back to Luna Bistro <ArrowUpRight />
                  </Link>
                </Button>
                <Button
                  variant="editorial"
                  className="mt-5 block"
                  onClick={() => setStatus('idle')}
                >
                  Make Another Demo Request
                </Button>
              </div>
            ) : (
              <>
                <span className="eyebrow">Your evening starts here</span>
                <h2>Reserve a table.</h2>
                <p className="form-note">
                  Portfolio concept · This demonstration does not make a real booking. Details are not stored or sent.
                </p>

                <form noValidate onSubmit={handleSubmit}>
                  <fieldset disabled={status === 'submitting'} className="border-0 p-0 m-0 min-w-0">
                    <div className="form-grid">
                      {renderField('name', 'Your name *', 'text', 'wide')}
                      {renderField('email', 'Email address', 'email', 'mobile-wide')}
                      {renderField('phone', 'Phone number', 'tel', 'mobile-wide')}
                      {renderField('date', 'Date *', 'date')}

                      <div className="form-field">
                        <label htmlFor="reservation-time">Time *</label>
                        <select
                          id="reservation-time"
                          value={form.time}
                          onChange={(e) => handleChange('time', e.target.value)}
                          aria-invalid={!!errors.time}
                          aria-describedby={errors.time ? 'error-time' : undefined}
                        >
                          <option value="">Select a time</option>
                          {getTimeSlots(form.date).map((slot) => (
                            <option key={slot.value} value={slot.value}>
                              {slot.label}
                            </option>
                          ))}
                        </select>
                        {errors.time && (
                          <span id="error-time" className="field-error">
                            {errors.time}
                          </span>
                        )}
                      </div>

                      <div className="form-field wide">
                        <label htmlFor="reservation-guests">Party size *</label>
                        <select
                          id="reservation-guests"
                          value={form.guests}
                          onChange={(e) => handleChange('guests', e.target.value)}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => (
                            <option key={g} value={g}>
                              {g} {g === 1 ? 'guest' : 'guests'}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-field wide">
                        <label htmlFor="reservation-message">
                          Anything we should know? <span className="text-muted-foreground">(optional)</span>
                        </label>
                        <textarea
                          id="reservation-message"
                          value={form.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          maxLength={1000}
                          placeholder="A special occasion, dietary requirements…"
                        />
                      </div>
                    </div>
                  </fieldset>

                  <p className="form-note mb-0">
                    * Required · Please provide an email address or phone number.
                  </p>

                  {status === 'error' && (
                    <p role="alert" className="field-error">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <Button
                    size="lg"
                    className="form-submit w-full"
                    type="submit"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Request a Table <ArrowUpRight />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>

          <aside className="reservation-aside">
            <img
              src={ASSETS.table}
              width={710}
              height={654}
              loading="lazy"
              alt="A candlelit table set for your evening at Luna"
            />
            <h3>Visit Luna Bistro.</h3>
            <div className="location-address">
              <MapPin />
              <div>
                125 Olive Street, Downtown
                <br />
                <span className="text-xs text-muted-foreground">Fictional address</span>
              </div>
            </div>
            <OpeningHours />
            <p className="concept-note">
              No live phone, email, or social accounts are connected to this fictional bistro.
            </p>
          </aside>
        </div>
      </section>

      <section className="section sand-section">
        <div className="site-container">
          <ConceptMap />
        </div>
      </section>
    </>
  );
}
