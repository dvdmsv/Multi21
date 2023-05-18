'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">multi21 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-1d84e6110143507359bde33a08e14170f854cdeebbd44a6bcc4164a73dce3a84c82bb45a355735524e724c6cf7e604e65e8eb8ed97d22575134a6485ae621336"' : 'data-target="#xs-components-links-module-AppModule-1d84e6110143507359bde33a08e14170f854cdeebbd44a6bcc4164a73dce3a84c82bb45a355735524e724c6cf7e604e65e8eb8ed97d22575134a6485ae621336"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1d84e6110143507359bde33a08e14170f854cdeebbd44a6bcc4164a73dce3a84c82bb45a355735524e724c6cf7e604e65e8eb8ed97d22575134a6485ae621336"' :
                                            'id="xs-components-links-module-AppModule-1d84e6110143507359bde33a08e14170f854cdeebbd44a6bcc4164a73dce3a84c82bb45a355735524e724c6cf7e604e65e8eb8ed97d22575134a6485ae621336"' }>
                                            <li class="link">
                                                <a href="components/AnadirUsuariosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnadirUsuariosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalendarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalendarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardsInicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardsInicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClasificacionActualizadaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClasificacionActualizadaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GestionarUsuariosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GestionarUsuariosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PilotosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PilotosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PilotosSeguidosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PilotosSeguidosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RevisarComentariosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RevisarComentariosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RevisarComentariosEliminadosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RevisarComentariosEliminadosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemporadaEnCursoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemporadaEnCursoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Clasificacion.html" data-type="entity-link" >Clasificacion</a>
                            </li>
                            <li class="link">
                                <a href="classes/Comentario.html" data-type="entity-link" >Comentario</a>
                            </li>
                            <li class="link">
                                <a href="classes/Piloto.html" data-type="entity-link" >Piloto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resultado.html" data-type="entity-link" >Resultado</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResultadosPiloto.html" data-type="entity-link" >ResultadosPiloto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiF1Service.html" data-type="entity-link" >ApiF1Service</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComentarioService.html" data-type="entity-link" >ComentarioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeguimientoPilotosService.html" data-type="entity-link" >SeguimientoPilotosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuariosService.html" data-type="entity-link" >UsuariosService</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});