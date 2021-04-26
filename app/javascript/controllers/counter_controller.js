import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['count'];

  connect (){
    console.log('Hello from Stimulus Counter controller');
  }
}
