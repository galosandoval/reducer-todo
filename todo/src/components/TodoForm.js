import React from 'react'


handleChanges = e => {
  this.setState({
    task: e.target.value
  })
}

setTask({
  initialValues: [...state, newTask]
});