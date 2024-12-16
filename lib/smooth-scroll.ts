export function smoothScroll(e: React.MouseEvent<HTMLElement>, id: string) {
  e.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

