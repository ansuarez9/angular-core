import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '@practice/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;

  selectedProject;

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.reset();
    this.projects$ = this.projectService.all();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  cancel() {
    this.selectProject(null);
  }

  reset() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    };

    this.selectProject(emptyProject);
  }
}
