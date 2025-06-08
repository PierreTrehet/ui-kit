import { createRoot, type Root } from 'react-dom/client';

class Container {
  id: string
  rootEl: HTMLElement | null
  root: Root | null

  constructor (id: string) {
    this.id = id
    this.rootEl = null
    this.root = null
  }

  getElement = () => {
    return document.getElementById(this.id)
  }

  create = () => {
    let el = this.getElement()

    if (!el) {
      el = document.createElement("div")
      el.id = this.id
      document.body.appendChild(el)
    }

    this.rootEl = el
    this.root = createRoot(el)
  }

  render = (children: React.ReactNode) => {
    if (!this.root) this.create()
    this.root!.render(children)
  }

  destroy = () => {
    if (!this.root || !this.rootEl) return
    this.root.unmount()
    this.rootEl.remove()
    this.root = null
    this.rootEl = null
  }
}

export default Container