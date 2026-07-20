/**
 * Единый премиальный заголовок секции: eyebrow-метка, золотая линия,
 * крупный заголовок шрифтом Cinzel и опциональный подзаголовок.
 *
 * @param {object} props
 * @param {string} props.eyebrow  - мелкая надпись капсом над заголовком
 * @param {string} props.title    - основной заголовок секции
 * @param {string} [props.subtitle] - опциональный поясняющий текст
 * @param {'left'|'center'} [props.align='center']
 * @param {string} [props.className]
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';
  return (
    <div
      className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <div className={`gold-rule mb-6 ${isCenter ? 'mx-auto' : ''}`} aria-hidden="true" />
      <h2 className="font-display text-3xl md:text-5xl font-light leading-tight text-brand-light">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 max-w-2xl text-base md:text-lg font-light leading-relaxed text-brand-gray ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
