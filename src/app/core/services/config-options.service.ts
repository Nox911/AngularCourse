import { Injectable } from '@angular/core';
import { AppConfigModel } from '../../shared/models/index';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private appConfig = {
    id: 'baseId',
    login: 'Nox',
    email: 'nox.911@gmail.com'
  };

  setConfigOptions(config: AppConfigModel): void {
    this.appConfig = {...config};
  }

  getConfigOption(): AppConfigModel {
    return this.appConfig;
  }
}
