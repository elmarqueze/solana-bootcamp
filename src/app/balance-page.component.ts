import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { ShyftApiService } from './shyft-api.service';
import { computedAsync } from 'ngxtension/computed-async';
import { FeaturesSectionComponent } from './features-section.component';

@Component({
    selector: 'balance-page',
    template:`
        <section class="px-24 py-32 bg-gray bg-opacity-5">
            @if (!account()) {
                <h2 class="text-center text-3xl">Selecciona tu Wallet e ingresa!</h2>
            }
            @if (account()) {
                <h2 class="text-center text-3xl">Este es tu saldo actual!</h2>
                <div class="flex justify-center items-center gap-2 mt-1">
                    <img [src]="account()?.info?.image" class="w-8 h-8 "/>
                    <p class="text-xl">{{account()?.balance}}</p>
                </div>
            }
            </section>
        <features-section></features-section>
    `,
    standalone: true,
    imports: [FeaturesSectionComponent]
})

export class BalancePageComponent{
    private readonly _shyftApiService = inject(ShyftApiService);
    private readonly _walletStore = inject(WalletStore);
    private readonly _publicKey = toSignal(this._walletStore.publicKey$);

    readonly account = computedAsync(
        () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()), { requireSync: false },
    )
}