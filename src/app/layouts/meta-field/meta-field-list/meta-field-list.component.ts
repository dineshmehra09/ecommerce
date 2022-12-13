import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-meta-field-list',
  templateUrl: './meta-field-list.component.html',
  styleUrls: ['./meta-field-list.component.scss'],
})
export class MetaFieldListComponent implements OnInit {
  search_currency = '';
  title='';
  description='';
  searchData = '';
  membList: any;
  totalCount: any;
  page = 1;
  limit = 10;
  loading = false;
  deleting = false;
  updating = false;
  metaId: any;
  status = false;
  modalRef: any;

  @ViewChild('deleteTemplateModal') deleteTemplateModal: any;
  @ViewChild('updateStatusModal') updateStatusModal: any;
  performingAction = false;
  AccessModule: any;

  constructor(
    private dataService: DataService,
    private notifier: NotifierService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this._getModuleAccess();
    this._fetchmembList(0);
  }


  // Fetching SMS Template List
  _fetchmembList(pageNo: number) {
    const page = {
      limit: this.limit,
      offset: (this.page - 1) * this.limit,
      key: this.searchData ? this.searchData : '',
      filter: {
        titile: this.title ? this.title : '',
        description: this.description ? this.description : '',
      },
    };
    this.loading = true;
    this.membList = null;
    this.dataService.getMembershipList(page).subscribe(
      (res: any) => {
        this.membList = res.data.result;
        this.totalCount = res.data.total_count;
        this.loading = false;
      },
      (error: any) => {
        this.loading = false;
      }
    );
  }
  Search() {
    // this._fetchmembList(0);
  }
  // show delete modal
  onInitDelete(id: any) {
    this.metaId = id;
    this.modalRef = this.modalService.open(this.deleteTemplateModal, {
      centered: true,
      windowClass: 'action-modal',
    });
  }

  // show update status modal
  onInitUpdateStatus(Id: any, status: any) {
    if (this.AccessModule.update_status == true) {
      this.metaId = Id;
      this.status = status;
      this.modalRef = this.modalService.open(this.updateStatusModal, {
        centered: true,
        windowClass: 'action-modal',
      });
    }
  }

  // On delete template
  onDeleteTemplate() {
    // this.deleting = true;
    // this.dataService.deleteMeta(this.metaId).subscribe((res) => {
    //   this.deleting = false;
    //   this.notifier.notify('success', 'Meta field has been deleted!');
    //   this.modalRef.close();
    //   this.Search();
    // });
  }

  // On update status of template
  onUpdateStatus() {
    // let status = {
    //   id: this.metaId,
    //   status: !this.status,
    // };
    // this.updating = true;
    // this.dataService.UpdateMetaStatus(status).subscribe((res) => {
    //   this.updating = false;
    //   this.notifier.notify('success', 'Meta field status updated!');
    //   this.modalRef.close();
    //   this.Search();
    // });
  }

  // On Delete Multiple User
  async onDeleteMultipleFaqs() {
    let selectedRecords = this.selectedRecords;
    this.metaId && selectedRecords.push(this.metaId);
    if (selectedRecords.length > 0) {
      this.performingAction = true;
      try {
        const response = await this.dataService
          .deleteAllMeta(selectedRecords)
          .toPromise();
        this.performingAction = false;
        this.notifier.notify(
          'success',
          this.metaId
            ? 'Meta fields has been deleted!'
            : 'Deleted selected records!'
        );
        this.metaId && this.modalRef.close();
        this.metaId = null;
        this.Search();
      } catch {
        this.performingAction = false;
        this.notifier.notify('error', 'Something went wrong!');
        this._fetchmembList(0);
      }
    } else {
      this.notifier.notify('error', 'Please select any record!');
    }
  }

  // On update multiple user status
  async onUpdateMultipleStatus(status: boolean) {
    let selectedRecords = this.selectedRecords;
    this.metaId && selectedRecords.push(this.metaId);
    if (selectedRecords.length > 0) {
      let users = {
        id: selectedRecords.join(),
        is_active: status,
      };
      this.performingAction = true;
      try {
        const response = await this.dataService
          .updateMultipleStatusOfMeta(users)
          .toPromise();
        this.performingAction = false;
        this.notifier.notify(
          'success',
          `${
            this.metaId ? 'Meta field' : 'Selected Meta field'
          } status updated!`
        );
        this.metaId && this.modalRef.close();
        this.metaId = null;
        this.Search();
      } catch {
        this.performingAction = false;
        this.notifier.notify('error', 'Something went wrong!');
        this._fetchmembList(0);
      }
    } else {
      this.notifier.notify('error', 'Please select any record!');
    }
  }

  // Getting Selected Records in table
  get selectedRecords() {
    let users: any[] = [];
    let checkboxes = document.querySelectorAll(
      '.card-body tbody td input[type="checkbox"]'
    ) as NodeList;
    checkboxes.forEach((checkbox: any) => {
      if (checkbox.checked) {
        users.push(checkbox.id);
      }
    });
    return users;
  }

  listPerPage(event: any) {
    this.limit = event.target.value;
    this.Search();
  }
  //AdvanceSearch
  advanceSearch() {
    this._fetchmembList(0);
  }
  resetAdvanceSearch() {
    this.title='';
    this.description='';
    this.search_currency = '';
    this._fetchmembList(0);
  }
}
