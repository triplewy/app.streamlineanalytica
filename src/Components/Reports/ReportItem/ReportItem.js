import React from 'react';
import { downtimeString } from '../../Utilities/DowntimeString'
import './ReportItem.css'

export default class ReportItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // showModal: false,
      // selectedImage: null,
    };

    // this.renderItem = this.renderItem.bind(this)
    // this.toggleModal = this.toggleModal.bind(this)
  }

  // renderItem(item) {
  //   const win = Dimensions.get('window');
  //   return (
  //     <TouchableOpacity onPress={() => this.setState({selectedImage: item.item.url, showModal: true})}>
  //       <Image
  //         source={{uri: item.item.url}}
  //         style={{width: (win.width - 100) / 4, height: (win.width - 100) / 4, margin: 10, borderRadius: 8}}
  //       />
  //     </TouchableOpacity>
  //   )
  // }
  //
  // toggleModal() {
  //   this.setState({showModal: !this.state.showModal})
  // }

  render() {
    const options = {timeZone: 'UTC', weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'}
    const date = new Date(this.props.reportedDate).toLocaleDateString('en-US', options)
    const downtime = downtimeString(this.props.downtime)

    return (
      <div className='ReportItem'>
        <div>
          <div>
            <div>
              <p className='line'>{`LINE ${this.props.name}`}</p>
              <p className='lineLeader'>{this.props.lineLeaderName}</p>
            </div>
          </div>
          <div>
            <img src={this.props.icon_url} />
            <p>{this.props.machineName}</p>
          </div>
          <div>
            <div>
              <p className='date'>{date}</p>
              <p className='downtime'>{downtime}</p>
            </div>
          </div>
        </div>
        <div className='descriptionWrapper'>
          <p>{this.props.description}</p>
        </div>
            {/* <FlatList
              horizontal
              scrollEnabled={false}
              data={this.props.images}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            />
            <ImageModal selectedImage={this.state.selectedImage} showModal={this.state.showModal} toggleModal={this.toggleModal} />
          </View> */}
      </div>
    )
  }
}
