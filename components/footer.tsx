export function Footer() {
  return (
    <footer className="border-t bg-background py-4">
      <div className="container flex flex-col md:flex-row items-center justify-between px-4 md:px-6 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} AI Prep Hub. All rights reserved.</p>
        <nav className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  )
}
