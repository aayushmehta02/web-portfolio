import React from 'react'

export const Keyboard = () => {
  return (
    <div>
    <div className="my-1 flex w-full justify-center gap-1">
  <kbd className="kbd">q</kbd>
  <kbd className="kbd">w</kbd>
  
  <kbd className="kbd shaded">r</kbd>
  <kbd className="kbd shaded">e</kbd>
  <kbd className="kbd shaded">a</kbd>
  <kbd className="kbd shaded">c</kbd>
  <kbd className="kbd shaded">t</kbd>
  <kbd className="kbd">y</kbd>
  <kbd className="kbd">u</kbd>
  <kbd className="kbd">i</kbd>
  
  
</div>
<div className="my-1 flex w-full justify-center gap-1">
<kbd className="kbd">x</kbd>
  <kbd className="kbd">s</kbd>
  <kbd className="kbd">v</kbd>
  <kbd className="kbd">f</kbd>
  <kbd className="kbd">g</kbd>
  <kbd className="kbd shaded">t</kbd>
  <kbd className="kbd shaded">e</kbd>
  <kbd className="kbd shaded">c</kbd>
  <kbd className="kbd shaded">h</kbd>
  {/* <kbd className="kbd">j</kbd>
  <kbd className="kbd">k</kbd>
  <kbd className="kbd">l</kbd> */}
</div>
<div className="my-1 flex w-full justify-center gap-1">
  <kbd className="kbd">z</kbd>
  
  <kbd className="kbd shaded">c</kbd>
  <kbd className="kbd shaded">o</kbd>
  <kbd className="kbd shaded">d</kbd>
  <kbd className="kbd shaded">e</kbd>
  <kbd className="kbd">b</kbd>
  <kbd className="kbd">n</kbd>
  <kbd className="kbd">m</kbd>
  
</div>
    </div>
  )
}
