import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarOpen: boolean = false;
  openSubmenu: string | null = null;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;

    if (!this.isSidebarOpen) {
      this.openSubmenu = null;
    }
  }

  toggleSubmenu(menu: string): void {
    this.openSubmenu = this.openSubmenu === menu ? null : menu;
  }
}
