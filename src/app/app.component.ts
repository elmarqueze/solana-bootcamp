import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { ShyftApiService } from './shyft-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { computedAsync } from 'ngxtension/computed-async';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HdWalletMultiButtonComponent],
  template: `
    <header>
      <h1 class="text-5xl text-center mb-4">Hola, soy Bob.</h1>
      <div class="flex justify-center">
        <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>

      @if (account()) {
        <div>
          <img src="" alt="">
        </div>
      }

    </header>
  `
})
export class AppComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()), { requireSync: true },
  )
}
