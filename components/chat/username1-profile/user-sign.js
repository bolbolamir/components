import { defineComponent } from '../../../packages/vue.js'

export let UserSign = defineComponent({
    template: `
        <article class="Profile">
            <div class="action-buttons-in-image" role="navigation">
                <button tabindex="button" aria-label="Back to previous page">
                    <svg
                    role="presentation"
                    x="0px"
                    y="0px"
                    viewBox="0 0 219.151 219.151"
                    style="enable-background:new 0 0 219.151 219.151;">
                        <g>
                            <path d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575
                                C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575
                                c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z"/>
                            <path d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008
                                c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825
                                c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628
                                c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"/>
                        </g>
                    </svg>
                </button>
                <button type="button" aria-label="Call Username 1">
                    <svg
                    width="18px"
                    role="presentation"
                    height="18px"
                    viewBox="0 0 18 18"
                    version="1.1">
                        <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd">
                            <g id="Rounded" transform="translate(-171.000000, -1219.000000)">
                                <g id="Communication" transform="translate(100.000000, 1162.000000)">
                                    <g id="-Round-/-Communication-/-call" transform="translate(68.000000, 54.000000)">
                                        <g transform="translate(0.000000, 0.000000)" id="Path">
                                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                            <path d="M19.23,15.26 L16.69,14.97 C16.08,14.9 15.48,15.11 15.05,15.54 L13.21,17.38 C10.38,15.94 8.06,13.63 6.62,10.79 L8.47,8.94 C8.9,8.51 9.11,7.91 9.04,7.3 L8.75,4.78 C8.63,3.77 7.78,3.01 6.76,3.01 L5.03,3.01 C3.9,3.01 2.96,3.95 3.03,5.08 C3.56,13.62 10.39,20.44 18.92,20.97 C20.05,21.04 20.99,20.1 20.99,18.97 L20.99,17.24 C21,16.23 20.24,15.38 19.23,15.26 Z" fill="#1D1D1D"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
                <button type="button" aria-label="More options">
                    <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    role="presentation"
                    stroke-linejoin="round"
                    class="feather feather-more-vertical">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                </button>
            </div>
            <img src="username-1.png" tabindex="0" alt="Username 1 profile picture">
            <div class="user-status-in-image">
                <div>
                    <h1>Username1</h1>
                    <p>Last seen recently</p>
                </div>
                <button type="button" aria-label="Chat with Username 1">
                <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    role="presentation">
                    <g
                    id="Icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd">
                        <g id="Rounded" transform="translate(-510.000000, -1218.000000)">
                            <g id="Communication" transform="translate(100.000000, 1162.000000)">
                                <g id="-Round-/-Communication-/-chat_bubble_outline" transform="translate(408.000000, 54.000000)">
                                    <g transform="translate(0.000000, 0.000000)">
                                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                        <path d="M20,2 L4,2 C2.9,2 2,2.9 2,4 L2,22 L6,18 L20,18 C21.1,18 22,17.1 22,16 L22,4 C22,2.9 21.1,2 20,2 Z M19,16 L6,16 L4,18 L4,5 C4,4.45 4.45,4 5,4 L19,4 C19.55,4 20,4.45 20,5 L20,15 C20,15.55 19.55,16 19,16 Z" id="🔹Icon-Color" fill="#1D1D1D"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    `,
})
