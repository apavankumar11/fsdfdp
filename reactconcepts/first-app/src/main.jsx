import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Second from './components/Second.jsx'
import State from './components/State.jsx'
import Parent1 from './components/parent1.jsx'
import Parent2 from './components/Parent2.jsx'
import Parent3 from './components/Parent3.jsx'
import Parent4 from './components/Parent4.jsx'
import Bootstrap from './components/Bootstrap.jsx'
import Events1 from './components/Events1.jsx'
import Conditionalrendering from './components/Conditionalrendering.jsx'
createRoot(document.getElementById('root')).render(
    // <Second/>
    // <State/>
    // <Parent1/>
    // <Parent2></Parent2>
    // <Parent3/>
    // <Parent4/>
    // <Bootstrap/>
    // <Events1/>
    <Conditionalrendering/>
)
