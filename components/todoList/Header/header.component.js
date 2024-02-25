export function Header(title) {
    const container = document.createElement('h1')
    container.classList.add('header')
    
    container.append(title)
    return container
}