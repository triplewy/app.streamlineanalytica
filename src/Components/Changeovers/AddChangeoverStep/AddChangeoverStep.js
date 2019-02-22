import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import * as loadImage from 'blueimp-load-image'
import plusIcon from '../../../Images/plus-icon.png'
import closeIcon from '../../../Images/close-icon.png'
import './AddChangeoverStep.css'

class AddChangeoverStep extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: '',
      image: null
    }

    this.previewImage = this.previewImage.bind(this)
    this.createChangeoverStep = this.createChangeoverStep.bind(this)
  }


  previewImage(e) {
    var file = e.target.files[0]
    const loadImageOptions = {
      canvas: true,
      maxWidth: 1080,
      maxHeight: 1080,
      minWidth: 480,
      minHeight: 480,
      downsamplingRatio: 0.6
    }
    loadImage.parseMetaData(file, (data) => {
      if (data.exif) {
        loadImageOptions.orientation = data.exif.get('Orientation')
      }
      loadImage(file, (canvas) => {
        file.imageUrl = canvas.toDataURL('jpg')
        this.setState({ image: {file: file, imageUrl: file.imageUrl}})
      }, loadImageOptions)
    })
  }

  render() {
    return (
      <div className='AddChangeoverStep'>
        {this.state.image ?
          <div className='imageWrapper'>
            <button onClick={() => this.setState({ image: null })}>
              <img className='deleteImage' src={closeIcon} />
            </button>
            <img className='inputImage' src={this.state.image.imageUrl} />
          </div>
          :
          <div>
            <p>Add Image</p>
            <label htmlFor="input_image_button" className='addImage'>
              <img src={plusIcon} />
            </label>
            <input id="input_image_button" type="file" name="post_pic" accept="image/*" onChange={this.previewImage.bind(this)}></input>
          </div>
        }

        <textarea placeholder="Write description here..." rows="4" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })}/>
        <button className='addStep'>Add Step</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChangeoverStep);
