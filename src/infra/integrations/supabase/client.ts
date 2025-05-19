import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class SupabaseClientClass {
  private readonly client: SupabaseClient;

  constructor() {
    const supabase = createClient(
      process.env.SUPABASE_CLIENT_URL ?? '',
      process.env.SUPABASE_CLIENT_KEY ?? '',
    );
    this.client = supabase;
  }

  public get instance(): SupabaseClient {
    return this.client;
  }

  public generateStorageLink(bucket: string, filePathName: string) {
    return `${process.env.SUPABASE_CLIENT_URL}/storage/v1/object/public/${bucket}/${filePathName}`;
  }
}
