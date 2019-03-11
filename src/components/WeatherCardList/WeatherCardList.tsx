import * as React from "react";
import * as request from "superagent";
import { IWeatherCard } from '../WeatherCard/WeatherCardProps';
import WeatherCard from '../WeatherCard/WeatherCard';

interface IWeatherCardList {
  weatherCards: IWeatherCard[];
}

class WeatherCardList extends React.Component<any, IWeatherCardList> {
  constructor(props: any) {
    super(props);
    this.state = {
      weatherCards: []
    };
  }

  public componentWillMount() {
    request
      .get("http://api.openweathermap.org/data/2.5/forecast")
      .query({
        q: "Hakodate",
        appid: "742c5ceb44cc03def377fa696628f8d2"
      })
      .then(response => response.body.list)
      .then(body => {
        console.log(body);
        this.setState({
          weatherCards: body
        });
        console.log(JSON.stringify(this.state.weatherCards));
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }
  public render() {
    const resultNodes = this.state.weatherCards.map(weatherCard => {
      return <WeatherCard key={weatherCard.dt} {...weatherCard} />;
    });

    return (
    <div>
        <h1>函館お天気情報</h1>
        <p>Hakodate Weather Information</p>
        <ul>{resultNodes}</ul>
    </div>
    )};
}

export default WeatherCardList;