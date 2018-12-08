import React,{Component} from 'react';
import '../styles/feature-widget.scss';
class Featurewidget extends Component {
	render() {
		return (
			<div className="app-featurewidget container">
        <div className="row">
				 	<div className="col-3">
					 <div className="widget row">
					 	<div className="feature-icons icons-trophy"> 
						 	<i className="fa fa-trophy" aria-hidden="true"></i> 
						</div>
					 	<div className="feature-text">	
						 SmartDeals
						</div>
						</div>
					</div>
					<div className="col-3">
						<div className="widget row">
						<div className="feature-icons icons-gamepad"> <i className="fa fa-gamepad" aria-hidden="true"></i> 
						</div>
					 	<div className="feature-text">	
						 	Gadgets 
						</div>	
					 </div>
					</div>
					<div className="col-3">
						<div className="widget row">
							<div className="feature-icons icons-cutlery"> 
								<i class="fa fa-cutlery" aria-hidden="true"></i> 
							</div>
					 		<div className="feature-text">	
						 		Kitchenwares 
							</div>
						</div>
					</div>
					<div className="col-3">
						<div className="widget row">
							<div className="feature-icons icons-music"> 
								<i className="fa fa-music" aria-hidden="true"></i> 
							</div>
					 		<div className="feature-text">	
						 		Feel d'beat 
							</div>
						</div>
					</div>
			</div>
		</div>
		)
	}
}
export default Featurewidget;