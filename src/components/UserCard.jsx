import { Component } from "react";

export class UserCard extends Component{
    render(){
        return(
            <div className="carte">
                <img src={this.props.ImageUrl} alt="" />
                <div>
                    <h1>{this.props.prenom} {this.props.nom}</h1>
                    <p>{this.props.email}</p>
                </div>
            </div>
        )
    }
}