export default function Byline() {
  return (
    <div className="flex items-center justify-between gap-x-4 p-3.5 lg:px-5 lg:py-3">
      <div className="flex items-center gap-x-1.5">
        <div className="text-sm text-rose-200">Built with 🌸</div>
      </div>
      <div className="text-sm text-rose-200">
        <a
          className="underline decoration-dotted underline-offset-4 hover:text-rose-400"
          href="https://github.com/vercel/app-playground"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code
        </a>
      </div>
    </div>
  );
}
