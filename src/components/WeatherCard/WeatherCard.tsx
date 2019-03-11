import * as React from "react";
import { Card, Avatar } from "antd";
import { IWeatherCard } from './WeatherCardProps';

const { Meta } = Card;

class WeatherCard extends React.Component<IWeatherCard, any> {
  constructor(props: any) {
    super(props);
  }

  private kelvinToCelsius = (temp: number): number => Math.round(temp - 273.15);

  public render() {
    return (
      <div>
        <Card className="Card">
          <Meta
            avatar={<Avatar src={`http://openweathermap.org/img/w/${this.props.weather[0].icon}.png`}size="large"/>}
            title={
              <div>
                <p>{this.props.weather[0].main}</p>
                <h3>{this.kelvinToCelsius(this.props.main.temp) + "°C"}</h3>
              </div>
            }
            description={this.props.dt_txt}
          />
        </Card>
      </div>
    );
  }
}

export default WeatherCard;