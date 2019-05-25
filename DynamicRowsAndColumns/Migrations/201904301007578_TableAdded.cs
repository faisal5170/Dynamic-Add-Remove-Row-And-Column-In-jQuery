namespace DynamicRowsAndColumns.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TableAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DynaTables",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Created_By = c.String(),
                        Created_Date = c.DateTime(),
                        Soil_Rows = c.String(),
                        Soil_Columns = c.String(),
                        Soil_Header = c.String(),
                        Soil_Footer = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.DynaTables");
        }
    }
}
