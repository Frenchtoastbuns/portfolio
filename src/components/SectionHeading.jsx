function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs font-semibold uppercase text-circuit">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-steel sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
