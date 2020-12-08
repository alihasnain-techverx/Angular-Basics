import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '.app-servers', //select by class
  // selector: '[app-servers]', select by attribute
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server> <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreateStatus = "server isn't created";
  serverName = 'null';
  serverBool = false;
  servers = ['server1', 'server2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverBool = true;
    this.servers.push(this.serverName);
    this.serverCreateStatus = `server was successfully created. Name of the Server is ${this.serverName}`;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
