import React from 'react'
import Item from './item'

// コンポーネントを作る
const langs = ['JavaScript', 'Ruby', 'Python', 'Java', 'C']
const components = langs.map((lang, index) => {
  return (
    <Item text={lang} key={index} />
  )
})

// WeakMapを作ってcomponentsを追加
const weakMap = new WeakMap()
weakMap.set(components[0], true) // JavaScript
weakMap.set(components[1], true) // Ruby
weakMap.set(components[2], true) // Python
weakMap.set(components[3], false) // Java
weakMap.set(components[4], false) // C

const render = (props) => {
  return (
    <div>
      {components.map((component) => {
        // valueがtrueのcomponentだけ表示
        if (weakMap.get(component)) {
          return component
        }
      })}
    </div>
  )
}

export default render
