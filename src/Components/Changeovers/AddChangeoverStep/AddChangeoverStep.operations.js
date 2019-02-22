import { fetchCreateChangeoverStep } from '../../../api'

export function createChangeoverStep(imageUrl, description, steps) {
  return (dispatch) => {
    var formData = new FormData();
    formData.append('image', {uri: imageUrl, type: 'image/jpeg', name: "file"})
    formData.append('description', description)
    formData.append('step', steps);
    return fetchCreateChangeoverStep(formData)
    .then(res => res.json())
    .then(data => {

    })
    .catch(err => {
      
    })
  }
}
