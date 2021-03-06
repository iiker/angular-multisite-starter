import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Logger as TypeOrmLogger } from 'typeorm';
import { SiteConfigurationModule } from './site-configuration/site-configuration.module';
import { SiteConfiguration } from './site-configuration/site-configuration.entity';
import { TerminusModule } from '@nestjs/terminus';
import { SiteFeatureModule } from './site-feature/site-feature.module';
import { SiteFeature } from './site-feature/site-feature.entity';
import { HealthController } from './health/health.controller';

@Module( {
    imports: [
        TerminusModule,
        TypeOrmModule.forRoot( {
            type: 'sqlite',
            database: 'db.sqlite',
            entities: [ SiteConfiguration, SiteFeature ],
            // entities: [ __dirname + '/**/*.entity{.ts,.js}' ],
            synchronize: true,
            // logging: [ "query", "error", "info" ]
        } ),
        SiteConfigurationModule,
        SiteFeatureModule,

    ],
    controllers: [ AppController, HealthController ],
    providers: [ AppService ],
} )
export class AppModule { }
