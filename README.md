> npx create-next-app test\
> yarn dev -p 3001

Single Page\
Under the pages folder create single.js\
to access the single page\
http://localhost:3001/single

Switching Pages\
Under the pages folder create one.js and two.js\
import Link from "next/link";\
add <Link href="/one"><a>One</a></Link>

Styling Pages\
Uder the pages folder create styling.js\
add <style jsx>{``}<style>

Create a common component\
Create a components folder and create Nav.js\
You can't access Nav by\
http://localhost:3001/Nav\
import the Nav in one.js and two.js as what you do in React

Adding head to one.js and two.js\
import Head from 'next/head';\
add <Head><title></title><meta/></Head>\
the <Head> will form part of the header inside the html <head> tag

Restructure the code with the Layout.js component\
Goto components folder and create Layout.js\
Goto pages folder and create restructure.js and use Layout component\
http://localhost:3001/restructure

Extract all the things in common to /pages/\_document.js\
