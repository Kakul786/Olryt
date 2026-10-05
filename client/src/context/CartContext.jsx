import { createContext, useContext, useEffect, useReducer, useState } from 'react'
const Ctx = createContext(null)
export const useCart = () => useContext(Ctx)
function reducer(state, a) {
  switch (a.type) {
    case 'add': {
      const i = state.findIndex((x) => x.key === a.item.key)
      if (i > -1) return state.map((x, j) => (j === i ? { ...x, qty: x.qty + a.item.qty } : x))
      return [...state, a.item]
    }
    case 'qty': return state.map((x) => (x.key === a.key ? { ...x, qty: x.qty + a.d } : x)).filter((x) => x.qty > 0)
    case 'clear': return []
    default: return state
  }
}
export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], () => { try { return JSON.parse(localStorage.getItem('olryt-cart')) || [] } catch { return [] } })
  const [open, setOpen] = useState(false)
  const [bump, setBump] = useState(0)
  useEffect(() => { try { localStorage.setItem('olryt-cart', JSON.stringify(items)) } catch {} }, [items])
  const add = (item) => { dispatch({ type: 'add', item: { qty: 1, key: item.id, ...item } }); setBump((b) => b + 1) }
  const count = items.reduce((s, x) => s + x.qty, 0)
  const subtotal = items.reduce((s, x) => s + x.qty * x.price, 0)
  return <Ctx.Provider value={{ items, add, change: (key, d) => dispatch({ type: 'qty', key, d }), clear: () => dispatch({ type: 'clear' }), open, setOpen, count, subtotal, bump }}>{children}</Ctx.Provider>
}
