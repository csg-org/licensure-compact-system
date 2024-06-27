//
//  InputButton.ts
//  InspiringApps modules
//
//  Created by InspiringApps on 5/27/2020.
//

import {
    Component,
    Prop,
    Vue,
    toNative
} from 'vue-facing-decorator';

@Component({
    name: 'InputButton',
})
class InputButton extends Vue {
    @Prop({ required: true }) private label!: string;
    @Prop({ default: true }) private isEnabled?: boolean;
    @Prop({ required: true }) private onClick?: () => void;
    @Prop({ default: false }) private shouldTransformText?: boolean;
    @Prop({ default: false }) private isTransparent?: boolean;
    @Prop({ default: false }) private isTextLike?: boolean;
}

export default toNative(InputButton);

// export { InputButton };
