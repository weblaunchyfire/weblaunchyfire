import Image from "next/image";

export default function BrandLogo({ compact = false, markOnly = true, className = "", markClassName = "" }) {
  const text = compact ? "WebLaunchyFire" : "Web Launchy Fire";
  const mainText = compact ? "WebLaunchy" : "Web Launchy";

  return (
    <span className={`brand-logo ${className}`} aria-label={text}>
      <span className={`brand-logo-mark ${markClassName}`} aria-hidden="true">
        <Image
          src="/logo.png"
          alt=""
          width={96}
          height={96}
          className="brand-logo-image"
          priority
        />
      </span>
      {!markOnly && (
        <span className="brand-logo-word">
          <span>{mainText}</span>
          <span className="brand-logo-fire">Fire</span>
        </span>
      )}
    </span>
  );
}
