export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} Maciel de Souza Brant — Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2">
            Desenvolvido com ❤️ e ciência
          </p>
        </div>
      </div>
    </footer>
  );
}
