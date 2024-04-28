import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { buildConfig } from 'payload/config'
import { slateEditor } from '@payloadcms/richtext-slate'

import Users from './collections/Users'
import { Media } from './collections/Media'
import { Carousel } from './collections/Carousel'
import { Elins } from './globals/Elins'
import { Material } from './globals/Material'
import { Optik } from './globals/Optik'
import { Teori } from './globals/Teori'
import { Staffs } from './collections/Staffs'
import { History } from './globals/History'
import { News } from './collections/News'
import { Activities } from './collections/Acitivities'
import { VisiMisi } from './globals/VisiMisi'
import { UndergraduateProgram } from './globals/UndergraduateProgram'
import { AcademicSOP } from './collections/AcademicSOP'
import { MasterProgram } from './globals/MasterProgram'
import { DoctorProgram } from './globals/DoctorProgram'
import { VisiMisiMaster } from './globals/VisiMisiMaster'
import { VisiMisiDoktor } from './globals/VisiMisiDoktor'
import { Appendix } from './collections/Appendix'
import { Library } from './globals/Library'
import { Survey } from './globals/Survey'
import { Portfolio } from './collections/Portfolio'
import { ModuleHandbook } from './collections/ModuleHandbook'
import { TujuanManfaatS2 } from './globals/TujuanManfaatS2'
import { ProfilLulusanS2 } from './globals/ProfilLulusanS2'

export default buildConfig({
    admin: {
        user: Users.slug,
        bundler: webpackBundler(),
    },
    editor: slateEditor({}),
    collections: [
        Users,
        Carousel,
        Media,
        Staffs,
        ModuleHandbook,
        Portfolio,
        News,
        Activities,
        AcademicSOP,
        Appendix,
    ],
    globals: [
        History,
        VisiMisi,
        VisiMisiMaster,
        VisiMisiDoktor,
        UndergraduateProgram,
        DoctorProgram,
        Teori,
        Elins,
        Material,
        Optik,
        Library,
        Survey,
        TujuanManfaatS2,
        ProfilLulusanS2
    ],
    upload: {
        limits: {
            fileSize: 1000000,
        },
    },
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
    cors: ["http://localhost:5173"],
    plugins: [payloadCloud()],
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI,
        },
    }),
})
