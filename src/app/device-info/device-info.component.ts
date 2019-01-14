import { Component, OnInit } from '@angular/core';

declare var device;

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent implements OnInit {

  constructor() { }

  deviceInfo: any;

  ngOnInit() {
    this.deviceInfo = {
        model: device.model,
        platform: device.platform,
        uuid: device.uuid,
        version: device.version,
        manufacturer: device.manufacturer,
        serial: device.serial
    }
  }

}
