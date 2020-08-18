import {Coach} from './Coach';

export class CricketCoach implements Coach {
  getDailyWorkout(): string {
    return 'Practie your spin bowling technique';
  }
}
