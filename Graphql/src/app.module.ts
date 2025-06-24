import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'graphql',
      username: 'postgres',
      password: 'azamat998877',
      synchronize:true,
      autoLoadEntities: true,
      entities: [User]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'src/schema.gql',
    debug:true,
    playground:true
  }),
    UserModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
