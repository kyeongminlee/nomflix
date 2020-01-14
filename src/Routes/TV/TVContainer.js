import React from "react";
import TVPresenter from "./TVPresenter";
import { tVApi } from "../../api";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tVApi.topRated();
      const {
        data: { results: popular }
      } = await tVApi.popular();
      const {
        data: { results: airingToday }
      } = await tVApi.airingToday();
      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({
        error: "Can't find TV information."
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
