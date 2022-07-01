import { Component, OnInit } from '@angular/core';
import { Student } from '../../types/Student';
import { StatusEnum } from '../../types/Status.enum';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intern-signature',
  templateUrl: './intern-signature.component.html',
  styleUrls: ['./intern-signature.component.scss']
})
export class InternSignatureComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student | undefined;
  statuses =  [
    { label: this.getReadableStatus(StatusEnum.PENDING), value: StatusEnum.PENDING },
    { label: this.getReadableStatus(StatusEnum.SIGNED), value: StatusEnum.SIGNED },
    { label: this.getReadableStatus(StatusEnum.ABSENT), value: StatusEnum.ABSENT },
  ];
  showDialog = false;
  refreshing = false;
  displaySignedOnlyStudents = false;
  id: number | undefined;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    if (this.route) {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        console.log(this.id);
      });
    }
    this.students = [
      {
        id: 1,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.ABSENT,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 2,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.ABSENT,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 3,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.ABSENT,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 4,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 5,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 6,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.SIGNED,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 7,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 8,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 9,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 10,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.SIGNED,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 11,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.SIGNED,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 12,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 13,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 14,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.ABSENT,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 15,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 16,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },{
        id: 17,
        firstName: 'Jean Louis',
        lastName: 'Hagrah',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 18,
        firstName: 'Jonas',
        lastName: 'Trochet',
        status: StatusEnum.ABSENT,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 19,
        firstName: 'Swann',
        lastName: 'Leroy',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
      {
        id: 20,
        firstName: 'Adam',
        lastName: 'Dupuis',
        status: StatusEnum.PENDING,
        numberPhone: '06 89 76 56 40',
        email: 'etudiant.form.dev@gmail.com'
      },
    ];
  }

  public getReadableStatus(status: StatusEnum): string {
    switch (status) {
      case StatusEnum.PENDING:
        return 'En attente';
      case StatusEnum.ABSENT:
        return 'Absent';
      case StatusEnum.SIGNED:
        return 'Présent';
    }
  }

  public handleRefresh() {
    this.refreshing = true;
    this.messageService.add({severity:'info', summary: 'Actualisation en cours', detail: `actualisation de la liste des étudiants`});
    setTimeout(() => {
      this.refreshing = false;
    }, 3000);
  }


  handleManualSigning() {
    if (this.selectedStudent) {
      if(this.selectedStudent.signature && this.selectedStudent.status === StatusEnum.SIGNED) {
        this.messageService.add({severity:'error', summary: 'Erreur', detail: `${this.selectedStudent.firstName} ${this.selectedStudent.lastName} à déjà signé`});
        return;
      }
      this.showDialog = true;
    }
  }

  handleStudentSigning(event: any) {
    if (event.closeDialog) {
      this.showDialog = !event.closeDialog;
    }

    if (this.selectedStudent) {
      const findSudent = this.students.find(p => p === this.selectedStudent);
      if (findSudent) {
        findSudent.signature = event.signature;
        findSudent.status = StatusEnum.SIGNED
        this.messageService.add({severity:'success', summary: 'Info', detail: `${findSudent.firstName} ${findSudent.lastName} à bien signé`});
      }


      // console.log(this.students);

    }
  }

}
