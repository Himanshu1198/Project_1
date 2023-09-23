import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('')
  const handleUpClick = () => {
    let name
    name = text.toUpperCase()
    setText(name)
    props.showAlert('Text converted to upper case!', 'success')
  }
  const handleLowClick = () => {
    let name
    name = text.toLowerCase()
    setText(name)
    props.showAlert('Text converted to lower case!', 'success')
  }
  const handleBoldClick = () => {
    let textArea = document.getElementById('exampleFormControlTextarea1')
    textArea.style.fontWeight = 'bold'
    props.showAlert('Text converted to Bold font weight!', 'success')
  }
  const handleItlClick = () => {
    let textArea = document.getElementById('exampleFormControlTextarea1')
    textArea.style.fontStyle = 'italic'
    props.showAlert('Text converted to italic font style!', 'success')
  }
  const copyText = () => {
    var temp = document.getElementById('exampleFormControlTextarea1')
    temp.select()
    navigator.clipboard.writeText(temp.value)
    props.showAlert('Text copied!', 'success')
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] + /)
    setText(newText.join(' '))
    props.showAlert('Extra spaces removed!', 'success')
  }
  const handleClearClick = () => {
    setText('')
    props.showAlert('Text cleared!', 'success')
  }
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const wordCount = (len) => {
    if (len - 1 === 0) {
      return 1
    } else {
      return len
    }
  }
  return (
    <>
      <div className='container '>
        <h2 className={`text-${props.mode === '' ? 'dark' : 'light'}`}>
          {props.heading}
        </h2>
        <div className='mb-3'>
          <textarea
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='8'
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: `${props.mode === '' ? 'white' : '#a2a2a2'}`,
              color: `${props.mode === '' ? 'black' : 'white'}`,
            }}
          ></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className='btn btn-primary' onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className='btn btn-primary mx-2 ' onClick={handleBoldClick}>
          Convert to Bold
        </button>
        <button className='btn btn-primary ' onClick={handleItlClick}>
          Convert to Italic
        </button>
        <button className='btn btn-primary mx-2' onClick={copyText}>
          Copy Text
        </button>
        <button className='btn btn-primary' onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className='btn btn-primary mx-2 ' onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === '' ? 'dark' : 'light'
        }`}
      >
        <h3>Your text summary</h3>
        <p>
          {text.length > 0
            ? `${wordCount(text.split(' ').length)} words and ${
                text.length
              } characters`
            : `0 words and 0 characters`}
        </p>
        <p>Minutes to read : {0.008 * text.split(' ').length}</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : 'Enter something in textbox to preview here'}
        </p>
      </div>
    </>
  )
}
