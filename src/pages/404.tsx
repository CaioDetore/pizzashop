import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para o{" "}
        <Link to="/" className="font-medium text-cyan-500">
          Dashboard
        </Link>
      </p>
    </div>
  );
}
