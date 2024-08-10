const root = document.querySelector('#root')

const element = {
    type:'a',
    props:{
        href: 'https://google.com/',
        target: '_blank',
    },
    children:'Click me to go to google'
}

function customRender(element,root){
    const newElement=document.createElement(element.type)
    newElement.innerHTML =element.children
    for (const key in element.props) {
        {
            newElement.setAttribute(key,element.props[key])
        }
    }
    root.appendChild(newElement)

}
customRender(element,root)
// customRender will create a dom tree and render our cumtomReactElement to mainContainer.
// this same happends in react where the function we provide is parsed and converted to react element and then rendered using dom tree.