import { Subject } from 'rxjs';

export interface View {
  onDestroy$: Subject<void>;
}
