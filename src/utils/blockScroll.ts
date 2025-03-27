export const BlockScroll = (isOpen: boolean) => {

  const body = document.querySelector('body')

  if (body) {
    if (isOpen) {
      body.classList.add('blocked')
    } else {
      body.classList.remove('blocked')
    }
  }
}