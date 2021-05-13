import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export const AllCoursesAnimations = [
    trigger('valueChanged', [
        transition('* => *', [
            animate('500ms',
                keyframes([
                    style({ opacity: 0, transform: 'translateY(-1em)', offset: 0 }),
                    style({ opacity: 0.5, transform: 'translateY(-0.3em)', offset: 0.8 }),
                    style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                ])
            )
        ])
    ]),
    trigger('fadeFromLeft', [
        transition('* => *', [
            query(':enter', style({ opacity: 0 }), { optional: true }),
            query(':enter',
                stagger('200ms',
                    [
                        animate('500ms',
                            keyframes([
                                style({ opacity: 0, transform: 'translateX(-1em)', offset: 0 }),
                                style({ opacity: 0.5, transform: 'translateX(-0.5em)', offset: 0.8 }),
                                style({ opacity: 1, transform: 'translateX(0em)', offset: 1.0 })
                            ])
                        )
                    ]
                ),
                { optional: true }
            )
        ])
    ]),
    trigger('fadeFromTop', [
        transition('* => *', [
            query(':enter', style({ opacity: 0 }), { optional: true }),
            query(':enter',
                stagger('200ms',
                    [
                        animate('500ms',
                            keyframes([
                                style({ opacity: 0, transform: 'translateY(-1.5em)', offset: 0 }),
                                style({ opacity: 0.5, transform: 'translateY(0.5em)', offset: 0.8 }),
                                style({ opacity: 1, transform: 'translateY(0em)', offset: 1.0 })
                            ])
                        )
                    ]
                ),
                { optional: true }
            )
        ])
    ])
]