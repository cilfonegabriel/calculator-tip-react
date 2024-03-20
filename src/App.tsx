import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"

function App() {
  
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center font-black text-4xl">Tip and Consumption Calculator</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="font-black text-4xl">Menu</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
              />
             ))}
          </div>


        </div>

        <div className="">
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
