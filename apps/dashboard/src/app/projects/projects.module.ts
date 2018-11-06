import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@practice/material';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule, MaterialModule, FormsModule],
  declarations: [ProjectsComponent]
})
export class ProjectsModule {}
